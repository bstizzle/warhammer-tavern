const statKeyStr = 'WSBSSTIAgDexIntWPFel'

export const isBscSkillCell = (char, setChar, record, field) => {
  const index = record.key
  const numField = parseInt(field, 10)
  //makes sure we don't overwrite the adv value when total updates
  if(Number.isInteger(numField)) {
    if(numField === 0 || numField !== record.total) {
      const updatedBasics = char.basicSkills
      updatedBasics.splice(index, 1, {
        name: record.name,
        stat: record.stat,
        adv: parseInt(field, 10)
      })
      console.log('is bsc skill advance!')
      setChar(char => ({
        ...char,
        basicSkills: updatedBasics
      }))
    }
  }
}

export const isAdvSkillCell = (char, setChar, record, field) => {
  const index = record.key 
  const numField = parseInt(field, 10)
  if(isNaN(numField)){
    const updatedAdvStrs = char.advSkills
    if(statKeyStr.includes(field)){
      updatedAdvStrs.splice(index, 1, {
        name: record.name,
        stat: field,
        adv: record.adv
      })
    } else {
      updatedAdvStrs.splice(index, 1, {
        name: field,
        stat: record.stat,
        adv: record.adv
      })
    }
    console.log('is adv skill name!')
    setChar(char => ({
      ...char,
      advSkills: updatedAdvStrs
    }))
  } else if(numField !== record.total) {
    const updatedAdvs = char.advSkills
    updatedAdvs.splice(index, 1, {
      name: record.name,
      stat: record.stat,
      adv: numField
    })
    console.log('is adv skill advance!')
    setChar(char => ({
      ...char,
      advSkills: updatedAdvs
    }))
  }
}

export const isTalentCell = (char, setChar, record, field) => {
  const index = record.key
  const updatedTalents = char.talents
  //check whether we are updating the name or the times
  if(Number.isInteger(parseInt(field, 10))) {
    console.log('is talent number')
    updatedTalents.splice(index, 1, {
      name: record.name,
      times: parseInt(field, 10)
    })
  } else {
    console.log('is talent name')
    updatedTalents.splice(index, 1, {
      name: field,
      times: record.times
    })
  }
  setChar(char => ({
    ...char,
    talents: updatedTalents
  }))
}

//need logic for differentiating between amount and enc fields
export const isTrappingCell = (char, setChar, record, field) => {
  const index = record.key;
  const updatedTrappings = char.trappings;

  if(Number.isInteger(parseInt(field, 10))) {
    const intField = parseInt(field, 10);
    if(intField === record.enc) {
      console.log('is trapping amount')
      updatedTrappings.splice(index, 1, {
        name: record.name,
        amount: intField,
        enc: record.enc
      })
    }
    else {
      console.log('is trapping enc')
      updatedTrappings.splice(index, 1, {
        name: record.name,
        amount: record.amount,
        enc: intField
      })
    }
  } else {
    console.log('is trapping name')
    updatedTrappings.splice(index, 1, {
      name: field,
      amount: record.amount,
      enc: record.enc
    })
  }
  setChar(char => ({
    ...char,
    trappings: updatedTrappings
  }))
}

//need logic for differentiating between different text and number fields
export const isArmorCell = (char, setChar, record, field) => {
  const index = record.key;
  const updatedArmor = char.armor;
  console.log(record);
  if(Number.isInteger(parseInt(field, 10))) {
    console.log('is armor enc')
    updatedArmor.splice(index, 1, {
      name: record.name,
      location: record.location,
      enc: parseInt(field, 10),
      ap: record.ap,
      qualities: record.qualities
    })
  } else if(field !== "") {
    console.log('is armor name')
    updatedArmor.splice(index, 1, {
      name: field,
      location: record.location,
      enc: record.enc,
      ap: record.ap,
      qualities: record.qualities
    })
  }
  setChar(char => ({
    ...char,
    armor: updatedArmor
  }))
}

//need logic for differentiating between different text and number fields
export const isWeaponCell = (char, setChar, record, field) => {
  const index = record.key;
  const updatedWeapons = char.weapons;

  if(Number.isInteger(parseInt(field, 10))) {
    console.log('is weapon enc')
    updatedWeapons.splice(index, 1, {
      name: record.name,
      group: record.group,
      enc: parseInt(field, 10),
      range: record.range,
      damage: record.damage,
      qualities: record.qualities
    })
  } else if(field !== "") {
    console.log('is weapon name')
    updatedWeapons.splice(index, 1, {
      name: field,
      group: record.group,
      enc: record.enc,
      range: record.range,
      damage: record.damage,
      qualities: record.qualities
    })
  }
  setChar(char => ({
    ...char,
    weapons: updatedWeapons
  }))
}

export const isSpellCell = (char, setChar, record, field) => {

}

export const isMiscCell = (char, setChar, record, field) => {
  const index = record.key;
  const updatedMisc = char.misc;

  updatedMisc.splice(index, 1, {
    text: field
  })
  setChar(char => ({
    ...char,
    misc: updatedMisc
  }))
}