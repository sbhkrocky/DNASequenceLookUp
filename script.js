        function countATG() {
            // Get the DNA sequence from the textarea
            const dnaInput = document.getElementById('dnaSequence').value.trim().toUpperCase();
            
            // Validate the input
            if (!dnaInput) {
                alert("Please enter a DNA sequence");
                return;
            }
            
            // Check for invalid characters
            const invalidChars = dnaInput.match(/[^ATGC]/g);
            if (invalidChars) {
                alert(`Invalid DNA characters found: ${invalidChars.join(', ')}\nPlease use only A, T, G, C.`);
                return;
            }
            
            // Count ATG occurrences
            const atgRegex = /ATG/g;
            let count = 0;
            let positions = [];
            let match;
            
            // Find all matches and their positions
            while ((match = atgRegex.exec(dnaInput)) !== null) {
                count++;
                positions.push(match.index + 1); // +1 to make it 1-based index
                // Reset regex lastIndex if we didn't manually advance it
                if (match.index === atgRegex.lastIndex) {
                    atgRegex.lastIndex++;
                }
            }
            
            // Display results
            document.getElementById('atgCount').textContent = count;
            document.getElementById('atgPositions').textContent = positions.length > 0 ? positions.join(', ') : 'None';
            
            // Create highlighted version of the sequence
            const highlighted = dnaInput.replace(/ATG/g, '<span class="highlight">ATG</span>');
            document.getElementById('highlightedSequence').innerHTML = highlighted;
            
            // Show results section
            document.getElementById('result').style.display = 'block';
        }
        
        function clearFields() {
            document.getElementById('dnaSequence').value = '';
            document.getElementById('result').style.display = 'none';
        }
  
