
function getUUID() {
  let hexDec = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];

  let format = [8, 4, 4, 4, 12];

  let uuid = [];

  for (let idx = 0; idx < format.length; idx += 1) {
    let tempId = [];
    for (let val = 0; val < format[idx]; val += 1) {
      let id = Math.floor(Math.random() * Math.floor(hexDec.length));
      tempId += hexDec[id];
    }
    uuid.push(tempId);
  }

  uuid = uuid.join('-');

  }

  console.log(uuid);