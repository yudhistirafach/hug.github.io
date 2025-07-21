const colors = [
    "#e0e9fb", // biru keabu-abuan awal
    "#F7DBDF", // kembali ke awal
];

let hasPlayed = false

function showHug() {
    if (hasPlayed) return
    hasPlayed = true

    const img = document.getElementById('gifImage')
    const button = document.getElementById('button-hug')
    const subtitle = document.getElementById('subtitle')


    img.style.display = 'block';
    button.style.display = 'none';

    document.body.style.backgroundColor = colors[0];

    setTimeout(() => {
        img.style.display = 'none';
        document.body.style.backgroundColor = "#F7DBDF";
        subtitle.style.display = 'block'
    }, 4000);
}

document.getElementById('button-hug').addEventListener('click', showHug)