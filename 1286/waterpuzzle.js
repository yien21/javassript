document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const playButton = document.getElementById('play-button');
    const levelSelect = document.getElementById('level-select');

    const tubes = [];
    let levelCount = 1;

    function chooseLevel(level){
        levelCount = level;
        document.getElementById('level-count').textContent = levelCount;
    }

    levelSelect.addEventListener('change', (event)=>{
        const selectedLevel = parseInt(event.target.value, 10);
        chooseLevel(selectedLevel);
    });

    function createTubes() {
        gameContainer.innerHTML = ''; // 清空容器
        for (let i = 0; i < levelCount; i++) {
            const tube = document.createElement('div');
            tube.classList.add('tube');
            tubes.push(tube);
            gameContainer.appendChild(tube);
        }
    }
    const gamecolors = colors.slice(0, Math.min(levelCount + 1, colors.length));
    const waterBlocks =[];

    gamecolors.forEach((color)=>{
        for (let i=0; i < 4; i++) {
            waterBlocks.push(color);
        }
    });
    waterBlocks.sort(() => Math.random() - 0.5); // 隨機排序顏色
    playButton.addEventListener('click', ()=>{
        //實作開始玩遊戲
        alert('開始玩遊戲');
    });
});