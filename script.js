// Owner contact details (used by JS functions)
const OWNER = {
  phone: "+94760264995",
  waPhone: "94760264995",
  email: "owner@zanta.com",
  name: "ZANTA Owner"
};

// Navigation / owner actions
function openWhatsAppOwner(){
  const url = "https://wa.me/" + OWNER.waPhone + "?text=" + encodeURIComponent("Hello " + OWNER.name + "!");
  window.open(url, "_blank");
}
function callOwner(){ window.open("tel:" + OWNER.phone); }
function emailOwner(){ window.open("mailto:" + OWNER.email); }

// ... rest of your JS from <script> ...
