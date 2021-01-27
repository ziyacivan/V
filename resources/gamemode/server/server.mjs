import * as alt from 'alt';
import * as chat from 'chat';
import { weaponList } from './weapons.mjs';

const playerSpawn = {
    x: 1070.206,
    y: -711.958,
    z: 58.483
};

alt.on('playerConnect', (player) => {
    player.model = 'a_m_y_beachvesp_01';
    player.spawn(playerSpawn.x, playerSpawn.y, playerSpawn.z, 0);

    alt.log(`${player.name} has joined with the ID of ${player.id}`);
});

alt.on('playerDeath', (target, killer, weapon) => {
    player.spawn(playerSpawn.x, playerSpawn.y, playerSpawn.z, 0);
});

// /giveweapon [weapon_name]
chat.registerCmd('giveweapon', (player, args) => {
    if (args.length <= 0)
        return chat.send(player, "{FF6347}/giveweapon [weapon_name]");

    const weaponName = args[0].toLowerCase();

    if (weaponList[weaponName] === undefined)
        return chat.send(player, '{FF6347} Weapon type is not valid.');

    player.giveWeapon(weaponList[weaponName], 999, true);
    chat.send(player, 'You were given a weapon.');
});