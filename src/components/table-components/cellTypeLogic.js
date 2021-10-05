const statKeyStr = 'WSBSSTIAgDexIntWPFel'

export const isBscSkillCell = (char, setChar, record, field) => {
  const index = record.key
  //makes sure we don't overwrite the adv value when total updates
  if(Number.isInteger(parseInt(field, 10))) {
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

export const isTrappingCell = (char, setChar, record, field) => {
  const index = record.key;
  const updatedTrappings = char.trappings;

  if(Number.isInteger(parseInt(field, 10))) {
    console.log('is trapping amount')
    updatedTrappings.splice(index, 1, {
      name: record.name,
      amount: parseInt(field, 10),
      enc: record.enc
    })
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