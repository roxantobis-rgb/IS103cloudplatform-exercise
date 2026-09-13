// Load saved text on page open
window.onload = () => {
  if (localStorage.myNote) {
    document.getElementById('note').value = localStorage.myNote;
  }
};

// Save to local storage
function save() {
  localStorage.myNote = document.getElementById('note').value;
  alert('✅ Saved!');
}

// Download as text file
function download() {
  const noteText = document.getElementById('note').value;
  const blob = new Blob([noteText], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'my-note.txt';
  link.click();
}

// Clear all text
function clearArea() {
  if (confirm('Clear all?')) {
    document.getElementById('note').value = '';
  }
}
