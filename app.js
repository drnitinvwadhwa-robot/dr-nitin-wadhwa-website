// Menu toggle + booking form submit to webhook (polished)
document.addEventListener('DOMContentLoaded', function(){
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  menuBtn && menuBtn.addEventListener('click', function(){ 
    if(nav.style.display === 'block') nav.style.display = ''; else nav.style.display = 'block';
  });

  var form = document.getElementById('bookingForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    var data = new FormData(form);
    var payload = {};
    data.forEach(function(v,k){ payload[k]=v; });
    payload.submitted_at = new Date().toISOString();
    // Replace WEBHOOK_URL with your Zapier / Make / GoHighLevel webhook
    var WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/000000/placeholder'; // <-- REPLACE
    fetch(WEBHOOK_URL, {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(payload)
    }).then(function(res){
      if(res.ok){
        alert('Request received. We will contact you shortly via WhatsApp/Phone.');
        form.reset();
      } else {
        alert('There was an issue submitting. We will contact you soon.');
      }
    }).catch(function(err){
      console.error(err);
      alert('Submission failed. Please call +91 99938 88788');
    });
  });
});
