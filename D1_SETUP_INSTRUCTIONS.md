# Cloudflare D1 Setup Instructions

Complete these steps to enable the membership signup system with Cloudflare D1 database.

---

## ✅ What's Already Done (by Claude)

- Installed `@astrojs/cloudflare` adapter
- Configured Astro for hybrid rendering (static + API routes)
- Created database migration file (`migrations/0001_create_memberships.sql`)
- Built encryption utilities for IBAN security
- Created API endpoint (`/api/signup`)
- Updated membership form to use API instead of Web3Forms
- Created admin panel (`/admin/signups`)
- Set up `wrangler.toml` configuration template
- Created `.dev.vars.example` for environment variables

---

## 🔧 What You Need to Do

### Step 1: Authenticate with Cloudflare

```bash
wrangler login
```

This will open your browser to log in to your Cloudflare account.

---

### Step 2: Create D1 Database

```bash
wrangler d1 create fitcity-production
```

**Expected output:**
```
✅ Successfully created DB 'fitcity-production'!

[[d1_databases]]
binding = "DB"
database_name = "fitcity-production"
database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

**Copy the `database_id` from the output!**

---

### Step 3: Update wrangler.toml

Open `wrangler.toml` and uncomment/update the D1 binding:

```toml
name = "fitcity-culemborg"
compatibility_date = "2024-01-01"

pages_build_output_dir = "./dist"

# D1 Database binding
[[d1_databases]]
binding = "DB"
database_name = "fitcity-production"
database_id = "YOUR_DATABASE_ID_HERE"  # <-- Paste the ID from Step 2

migrations_dir = "./migrations"
```

---

### Step 4: Run Database Migrations

This creates the `memberships` table in your D1 database:

```bash
wrangler d1 migrations apply fitcity-production
```

**Expected output:**
```
✅ Successfully applied 1 migration(s)!
```

---

### Step 5: Generate Encryption Secret

For local development, you need an encryption key for IBAN security:

**Option A - Using OpenSSL (if available):**
```bash
openssl rand -base64 32
```

**Option B - Using Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Option C - Using PowerShell (Windows):**
```powershell
-join ((33..126) | Get-Random -Count 32 | ForEach-Object {[char]$_})
```

Copy the generated secret!

---

### Step 6: Create .dev.vars File

Create a new file called `.dev.vars` in the project root:

```bash
# .dev.vars (local development only - DO NOT commit to git)
ENCRYPTION_SECRET=paste-your-secret-from-step-5-here
```

**Important:** This file is in `.gitignore` and should NEVER be committed!

---

### Step 7: Test Locally

Start the development server:

```bash
npm run dev
```

Then visit:
- **Signup form:** http://localhost:4321/signup
- **Admin panel:** http://localhost:4321/admin/signups

Try creating a test signup to verify everything works!

---

### Step 8: Deploy to Cloudflare Pages

#### A. Set Production Environment Variables

In Cloudflare dashboard:
1. Go to **Workers & Pages** → **fitcity-culemborg**
2. Click **Settings** → **Environment Variables**
3. Add variable:
   - Name: `ENCRYPTION_SECRET`
   - Value: (your encryption secret from Step 5)
   - Environment: **Production**

#### B. Bind D1 Database to Pages Project

In Cloudflare dashboard:
1. Go to **Workers & Pages** → **fitcity-culemborg**
2. Click **Settings** → **Functions**
3. Scroll to **D1 database bindings**
4. Add binding:
   - Variable name: `DB`
   - D1 database: Select `fitcity-production`

#### C. Deploy

```bash
npm run build
```

Then push to GitHub - Cloudflare Pages will automatically deploy!

---

## 📊 Admin Panel Access

The admin panel at `/admin/signups` shows:
- **All membership signups**
- **Status tracking** (new, contacted, activated)
- **Masked IBANs** for security (only last 4 digits visible)
- **Contact information** (clickable email/phone)

**Security Note:** Currently no authentication! Before going live, you should:
- Add Cloudflare Zero Trust authentication
- Or add basic auth password protection
- Or restrict by IP address

---

## 🔐 Security Features Implemented

✅ **IBAN Encryption:** All IBAN numbers encrypted with AES-GCM before storage
✅ **Mod-97 Validation:** Client-side IBAN checksum validation
✅ **Email Uniqueness:** Prevents duplicate signups
✅ **SQL Injection Protection:** Prepared statements with parameter binding
✅ **Environment Secrets:** Encryption key never in code

---

## 🚀 What Happens When Someone Signs Up

1. User fills out 3-step form on `/signup`
2. JavaScript validates all fields including IBAN
3. Form data sent to `/api/signup` as JSON
4. Server encrypts IBAN using AES-GCM
5. Data inserted into D1 database
6. User redirected to `/signup-success`
7. Rashid can view signup in `/admin/signups`

---

## 📝 Next Steps (Future Enhancements)

- [ ] Email notifications to admin on new signup (Resend/Cloudflare Email Workers)
- [ ] Status update functionality in admin panel
- [ ] Export signups to CSV
- [ ] Authentication for admin panel (Cloudflare Zero Trust)
- [ ] Dashboard analytics (signups per month, popular packages)
- [ ] Member detail modal with full IBAN decryption (admin only)

---

## ❗ Troubleshooting

### Error: "Database not configured"
- Check wrangler.toml has correct database_id
- Ensure D1 binding is set to `DB` (exact name)
- Restart dev server after changing wrangler.toml

### Error: "ENCRYPTION_SECRET not configured"
- Create `.dev.vars` file with ENCRYPTION_SECRET
- For production, add env var in Cloudflare dashboard

### Form submits but nothing in database
- Check console for errors
- Verify migrations ran successfully
- Check D1 database in Cloudflare dashboard

### IBAN validation failing
- Ensure IBAN has correct format (2 letters, 2 digits, then alphanumeric)
- Dutch IBANs must be exactly 18 characters
- Spaces are automatically added/removed

---

## 💾 Database Schema

```sql
memberships table:
  - id (auto-increment)
  - membership details (id, name, price, term)
  - personal info (name, email, phone, birthdate)
  - address (street, number, postal, city)
  - payment (iban_encrypted, account_holder)
  - consents (sepa, policy)
  - status (new/contacted/activated/cancelled)
  - timestamps (created_at, updated_at)
  - notes (for internal use)
```

---

**Need help?** Check the error messages in the console or contact Claude for assistance!
