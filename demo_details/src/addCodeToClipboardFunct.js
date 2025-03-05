function copyToClipboard(veldId) {
    var copyVeld = document.getElementById(veldId);
    copyVeld.select();
    copyVeld.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyVeld.value)
}

function copyThisClipboard() {
    navigator.clipboard.writeText(this.textContent);
    showCopyIcon(this);
    console.log(this.textContent);
}

function showCopyIcon(element) {
    let rect = element.getBoundingClientRect();

    // Create the icon element
    const icon = document.createElement('div');
    icon.textContent = "📋 Copied!";
    icon.classList.add('copy-icon');

    // Set the icon position near the cursor
    icon.style.left = `${rect.right + 10}px`; // 10px to the right of the cursor
    icon.style.top = `${rect.top}px`;  // 10px below the cursor
    

    document.body.appendChild(icon);

    // Show the icon
    setTimeout(function () {
        icon.classList.add('show-icon');
    }, 50);

    // Hide the icon after 1 second and remove it from the DOM
    setTimeout(function () {
        icon.classList.remove('show-icon');
        document.body.removeChild(icon);
    }, 1000);
}

for (const element of document.getElementsByTagName("code")) {
    element.addEventListener("click", copyThisClipboard);
}