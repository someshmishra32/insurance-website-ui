async function testChat() {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Who is the regulator for insurance in India?' }],
        userMessage: 'Who is the regulator for insurance in India?'
      })
    });

    const data = await response.json();
    console.log('Response Status:', response.status);
    console.log('Response Data:', JSON.stringify(data, null, 2));

    if (data.success && !data.message.includes("don't have real AI enabled yet")) {
      console.log('✅ Real AI response confirmed!');
    } else {
      console.log('❌ Still getting demo response or error.');
    }
  } catch (error) {
    console.error('Test Failed:', error.message);
  }
}

testChat();
