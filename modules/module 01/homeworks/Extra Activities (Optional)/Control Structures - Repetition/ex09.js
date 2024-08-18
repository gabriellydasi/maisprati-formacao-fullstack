/* 9 – Print a descending star pattern
Write a program that uses a do while loop to print a descending star pattern.
Tip: Use two loops, one inside the other. */

function printStarPattern(row) {
    let originalRows = row; // Número inicial de linhas de estrelas

    do {
        let stars = originalRows; // Define o número de estrelas para a linha atual
        let line = ''; // String para armazenar a linha de estrelas

        // Loop interno para adicionar estrelas à linha
        do {
            line += '*';
            stars--;
        } while (stars > 0);

        console.log(line); // Imprime a linha de estrelas
        originalRows--; // Reduz o número de linhas para a próxima iteração
    } while (originalRows > 0);
}

printStarPattern(5);
