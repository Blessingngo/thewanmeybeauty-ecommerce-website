const express = require('express');
const sendEmail = require('../utils/sendEmail');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/place-order', authMiddleware, async (req, res) => {
  const { items, totalAmount } = req.body;

  // Order logic...

  // Send confirmation email
  const emailOptions = {
    email: req.user.email,
    subject: 'Order Confirmation',
    message: `
      <h1>Order Confirmation</h1>
      <p>Thank you for your order. Here are the details:</p>
      <ul>
        ${items.map(item => `<li>${item.name} x ${item.quantity} - $${item.price}</li>`).join('')}
      </ul>
      <p>Total: $${totalAmount}</p>
    `,
  };

  try {
    await sendEmail(emailOptions);
    res.json({ message: 'Order placed and email sent!' });
  } catch (err) {
    res.status(500).json({ error: 'Email failed to send' });
  }
});

module.exports = router;
