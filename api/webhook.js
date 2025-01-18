const fs = require('fs');
const path = require('path');

// Store last 5 payments in a JSON file
const PAYMENTS_FILE = path.join(__dirname, '../data/recent-payments.json');
const MAX_RECENT_PAYMENTS = 5;

function updateRecentPayments(payment) {
  let payments = [];
  try {
    payments = JSON.parse(fs.readFileSync(PAYMENTS_FILE, 'utf8'));
  } catch (err) {
    // File doesn't exist or is invalid
  }

  // Add new payment to start of array
  payments.unshift({
    name: payment.from_name,
    amount: payment.amount,
    currency: payment.currency,
    timestamp: payment.timestamp,
    type: payment.type
  });

  // Keep only last 5 payments
  payments = payments.slice(0, MAX_RECENT_PAYMENTS);

  // Save to file
  fs.writeFileSync(PAYMENTS_FILE, JSON.stringify(payments, null, 2));
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  try {
    const data = JSON.parse(req.body.data);
    
    // Verify token
    if (data.verification_token !== process.env.KOFI_VERIFICATION_TOKEN) {
      return res.status(401).end();
    }

    // Update recent payments
    updateRecentPayments(data);

    res.status(200).end();
  } catch (err) {
    console.error('Error processing webhook:', err);
    res.status(500).end();
  }
}; 