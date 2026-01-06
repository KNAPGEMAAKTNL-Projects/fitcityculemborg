import type { APIRoute } from 'astro';
import { encrypt } from '@utils/encryption';

export const prerender = false; // This is a server endpoint

interface SignupData {
  // Membership
  membership_id: string;
  membership_name: string;
  membership_price: string;
  membership_term: string;

  // Personal
  full_name: string;
  email: string;
  phone: string;
  birthdate: string;

  // Address
  address_street: string;
  address_number: string;
  address_postal: string;
  address_city: string;

  // Payment
  iban: string;
  account_holder: string;
  start_date: string;

  // Consents
  sepa_consent: boolean;
  policy_consent: boolean;
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    // Get D1 database from runtime
    const db = locals.runtime.env.DB as D1Database;

    if (!db) {
      return new Response(
        JSON.stringify({ error: 'Database not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get encryption secret from environment
    const encryptionSecret = locals.runtime.env.ENCRYPTION_SECRET as string;

    if (!encryptionSecret) {
      console.error('ENCRYPTION_SECRET not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Parse form data
    const data = await request.json() as SignupData;

    // Validate required fields
    const requiredFields = [
      'membership_id', 'membership_name', 'membership_price', 'membership_term',
      'full_name', 'email', 'phone', 'birthdate',
      'address_street', 'address_number', 'address_postal', 'address_city',
      'iban', 'account_holder', 'start_date'
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof SignupData]) {
        return new Response(
          JSON.stringify({ error: `Veld '${field}' is verplicht` }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({ error: 'Ongeldig e-mailadres' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if email already exists
    const existingMember = await db
      .prepare('SELECT id FROM memberships WHERE email = ?')
      .bind(data.email)
      .first();

    if (existingMember) {
      return new Response(
        JSON.stringify({ error: 'Dit e-mailadres is al geregistreerd' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Encrypt IBAN before storing
    const encryptedIban = await encrypt(data.iban, encryptionSecret);

    // Insert into database
    const result = await db
      .prepare(`
        INSERT INTO memberships (
          membership_id, membership_name, membership_price, membership_term,
          full_name, email, phone, birthdate,
          address_street, address_number, address_postal, address_city,
          iban_encrypted, account_holder, start_date,
          sepa_consent, policy_consent, status
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'new')
      `)
      .bind(
        data.membership_id,
        data.membership_name,
        data.membership_price,
        data.membership_term,
        data.full_name,
        data.email,
        data.phone,
        data.birthdate,
        data.address_street,
        data.address_number,
        data.address_postal,
        data.address_city,
        encryptedIban,
        data.account_holder,
        data.start_date,
        data.sepa_consent ? 1 : 0,
        data.policy_consent ? 1 : 0
      )
      .run();

    // TODO: Send email notification to admin
    // This can be added later using Resend or Cloudflare Email Workers

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Inschrijving succesvol ontvangen',
        id: result.meta.last_row_id,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Signup error:', error);

    return new Response(
      JSON.stringify({
        error: 'Er is een fout opgetreden. Probeer het later opnieuw.',
        details: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
