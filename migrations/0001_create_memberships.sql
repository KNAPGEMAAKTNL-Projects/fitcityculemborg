-- Create memberships table
CREATE TABLE IF NOT EXISTS memberships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  -- Membership details
  membership_id TEXT NOT NULL,
  membership_name TEXT NOT NULL,
  membership_price TEXT NOT NULL,
  membership_term TEXT NOT NULL,

  -- Personal information
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  birthdate TEXT NOT NULL,

  -- Address
  address_street TEXT NOT NULL,
  address_number TEXT NOT NULL,
  address_postal TEXT NOT NULL,
  address_city TEXT NOT NULL,

  -- Start date
  start_date TEXT NOT NULL,

  -- Payment information (encrypted)
  iban_encrypted TEXT NOT NULL,
  account_holder TEXT NOT NULL,

  -- Consents
  sepa_consent INTEGER NOT NULL DEFAULT 1,
  policy_consent INTEGER NOT NULL DEFAULT 1,

  -- Status tracking
  status TEXT NOT NULL DEFAULT 'new',
  -- Status values: 'new', 'contacted', 'activated', 'cancelled'

  -- Metadata
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  notes TEXT,

  -- Indexes for common queries
  UNIQUE(email)
);

-- Create index for status queries
CREATE INDEX IF NOT EXISTS idx_memberships_status ON memberships(status);

-- Create index for created_at queries (recent signups)
CREATE INDEX IF NOT EXISTS idx_memberships_created_at ON memberships(created_at DESC);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_memberships_email ON memberships(email);
