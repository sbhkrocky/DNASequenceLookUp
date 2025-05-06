function countATG() {
    const dnaInput = document.getElementById('dnaInput').value.trim().toUpperCase();
    const resultDiv = document.getElementById('result');
    
    // Validate input
    if (!dnaInput) {
        resultDiv.innerHTML = '<p style="color:red;">Please enter a DNA sequence</p>';
        return;
    }
    
    // Check for invalid characters
    const invalidChars = dnaInput.match(/[^ATGC]/g);
    if (invalidChars) {
        resultDiv.innerHTML = `<p style="color:red;">Invalid DNA characters found: ${invalidChars.join(', ')}</p>`;
        return;
    }
    
    // Count ATG occurrences
    const atgCount = (dnaInput.match(/ATG/g) || []).length;
    
    // Highlight ATG sequences in the input
    const highlighted = dnaInput.replace(/ATG/g, '<span class="highlight">ATG</span>');
    
    // Show results
    resultDiv.innerHTML = `
        <p><strong>Results:</strong></p>
        <p>ATG codons found: ${atgCount}</p>
        <p>Sequence with ATG highlighted:</p>
        <div style="word-wrap:break-word; font-family:monospace;">${highlighted}</div>
    `;
}
