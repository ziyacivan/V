import * as alt from 'alt';
import * as chat from 'chat';

const playerSpawn = {
    x: 1070.206,
    y: -711.958,
    z: 58.483
};

alt.on('playerConnect', (player) => {
    player.model = 'a_m_y_beachvesp_01';
    player.spawn(playerSpawn.x, playerSpawn.y, playerSpawn.z, 0);
});

alt.on('playerDeath', (target, killer, weapon) => {
    player.spawn(playerSpawn.x, playerSpawn.y, playerSpawn.z, 0);
});

chat.registerCmd('giveweapon', (player, args) => {
    
});