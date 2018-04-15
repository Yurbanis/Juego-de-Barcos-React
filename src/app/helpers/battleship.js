export const getBattleField = () => {
  let battleField = new Array();
  for (let i = 0; i < 10; i++){
    let row = new Array();
    for (let j = 0; j < 10; j++){
      row.push(j);
    }
    battleField.push(row)
  }
  return battleField;
};
