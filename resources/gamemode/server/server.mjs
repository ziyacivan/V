import * as alt from 'alt';
import * as chat from 'chat';
import { weaponList } from './weapons.mjs';

const spawnPos = {
    x: 1070.206,
    y: -711.958,
    z: 58.483
};

const standartModel = 'mp_m_freemode_01';

alt.on('playerConnect', (player) => {
    alt.emitClient(player, 'spawn:Player', spawnPos);
});

alt.on('spawn:Ready', (player, pos) => {
    player.model = standartModel;
    player.spawn(pos.x, pos.y, pos.z, 0);
});

alt.on('playerDeath', (player) => {
    player.spawn(spawnPos.x, spawnPos.y, spawnPos.z, 0);
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

chat.registerCmd('veh', (player, arg) => {
    if(!arg || arg.length <= 0)
        return chat.send(player, "/veh [model]");

    try { 
        const newVehicle = new alt.Vehicle(arg[0], player.pos.x, player.pos.y, player.pos.z, 0, 0, 0);
        alt.emitClient(player, 'vehicle:SetInto', newVehicle);
    } catch(err) {
        chat.send(player, 'That model was incorrect.');
    }
});