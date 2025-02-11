
const OWNER_ID = ""; // Add your Replit user ID here

async function checkIsOwner() {
  try {
    const response = await fetch('/__replauthuser');
    const userData = await response.json();
    return userData && userData.id === OWNER_ID;
  } catch (error) {
    return false;
  }
}

async function requireOwner(element) {
  const isOwner = await checkIsOwner();
  if (!isOwner) {
    element.style.display = 'none';
  }
}
