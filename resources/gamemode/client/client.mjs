import * as alt from 'alt';
import * as native from 'natives';

alt.on('vehicle:SetInto', (newVehicle) => {
    const localPlayer = alt.Player.local.scriptID;
    
    alt.setTimeOut(() => {
        native.setPedIntoVehicle(localPlayer, newVehicle.scriptID, -1);
    }, 100);
});

alt.on('spawn:Player', pos => {
    alt.setTimeout(() => {
        alt.emitServer('spwan:Ready', pos);
    }, 3500);
});