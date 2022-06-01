import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './inputs.css'
import Typography from '@mui/material/Typography';
const prefiix = `https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/`;
const assets = [
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_Ring_003.png`, label: 'Lunisolar Ring', rarity: 'epico', type: 'acessorio', id:'0' },
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_Bracelet_003.png`, label: 'Pacification Bracelet', rarity: 'epico', type: 'acessorio', id:'1' },
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_Necklace_003.png`, label: 'Pacification Necklace', rarity: 'epico', type: 'acessorio', id:'2' },
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_EarRing_006.png`, label: 'Fallen Sun Earrings', rarity: 'epico', type: 'acessorio', id:'3' },
];
const taoistitem = [
{ code: `${prefiix}Item_Equip_Pct_01/Icon_WPN_PCT_05.png`, label: 'Sacred Treasure Sword', rarity: 'epico', type: 'arma', id:'0' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_SubWeapon_06.png`, label: 'Exorcism Fly-Whisk', rarity: 'epico', type: 'arma', id:'1' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Top.png`, label: 'Pakua Robe', rarity: 'epico', type: 'roupa', id:'2' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Pants.png`, label: 'Ultimate Crane Outfit', rarity: 'epico', type: 'roupa', id:'3' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Gloves.png`, label: 'Trustbuilding Robe Gloves', rarity: 'epico', type: 'roupa', id:'4' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Shose.png`, label: 'Pakua Boots', rarity: 'epico', type: 'roupa', id:'5' }
];
const arbalistitem = [
{ code: `${prefiix}Item_Equip_Pca_01/Icon_WPN_PCA_05.png`, label: 'New Moon Bow', rarity: 'epico', type: 'arma', id:'0' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_SubWeapon_06.png`, label: 'Changhae Quiver', rarity: 'epico', type: 'arma', id:'1' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Top.png`, label: 'Deep Secret Martial Uniform Top', rarity: 'epico', type: 'roupa', id:'2' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Pants.png`, label: 'Deep Secret Martial Uniform Pants', rarity: 'epico', type: 'roupa', id:'3' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Gloves.png`, label: 'Deep Secret Martial Uniform Gloves', rarity: 'epico', type: 'roupa', id:'4' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Shose.png`, label: 'Deep Secret Martial Uniform Shoes', rarity: 'epico', type: 'roupa', id:'5' },
];
const lanceritem = [
{ code: `${prefiix}Item_Equip_Pcz_01/Icon_Wpn_PCZ_05.png`, label: 'Brave Dragon Halberd', rarity: 'epico', type: 'arma', id:'0' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_SubWeapon_06.png`, label: 'Purple Moon Hand Polearm', rarity: 'epico', type: 'arma', id:'1' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Top.png`, label: 'Battleslayer Combat Top ', rarity: 'epico', type: 'roupa', id:'2' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Pants.png`, label: 'Battleslayer Combat Pants', rarity: 'epico', type: 'roupa', id:'3' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Gloves.png`, label: 'Battleslayer Combat Gloves', rarity: 'epico', type: 'roupa', id:'4' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Shose.png`, label: 'Battleslayer Combat Boots', rarity: 'epico', type: 'roupa', id:'5' },

];
const classes = [
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/arbalist-grade5.webp', name:'Arbalist', id:'0' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/lancer-grade5.webp', name:'Lancer', id:'1' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/taoist-grade5.webp', name:'Taoist', id:'2' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/sorcerer-grade5.webp', name:'Mage', id:'3' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/warrior-grade5.webp', name:'Warrior', id:'4' }
]
const arma = [
  { banner: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonScales.png', id:'0' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png', id:'1' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png', id:'2' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'3' },
]

export default function ItemSelect() {
  const [ imgClass, setImgClass ] = useState(null)
  const [ item, setItem ] = useState(null)
  const [ itemArray, setItemArray ] = useState([]) 
  const [ itemRecipe, setItemRecipe] = useState(null)
  const [ itemImg, setItemImg ] = useState(null)
  const [ imgArray, setImgArray ] = useState(null)

  function handleChange1(e, value, reason) {
    console.log(reason)
    if(reason === "selectOption"){
      setItemRecipe(value.label)
      setItemImg(value.code)
      value.type === "arma" && setImgArray([...arma,])
    }
  }
  function handleChange(e, value, reason) {
    console.log(reason)
    if(reason === "selectOption"){
      setItem(value.name)
      setImgClass(value.banner)    
      value.name === "Arbalist" && setItemArray([...arbalistitem, ...assets])
      value.name === "Lancer" && setItemArray([...lanceritem, ...assets])
      value.name === "Taoist" && setItemArray([...taoistitem, ...assets])
    }
    else if(reason === "clear"){
      setItem(null)
      setImgClass(null)
    }
  }
  return (
    <div className='main'>
             
    <Typography className='top' variant="h2" component="h2">
{item || "Selecione a classe"}
</Typography>
    <div className='dropdown'>
    <Autocomplete
      onChange={handleChange}
      id="item-select-demo"
      sx={{ width: 300 }}
      options={classes}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" key={option.id} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img className={`${option.rarity}`}
            loading="lazy"
            width="50"
            src={`${option.banner}`}
            srcSet={`${option.banner}`}
            alt=""
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        
        <TextField
          {...params}
          label="Escolha a classe"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
            
          }}
        />
      )}
      
    />
</div>

  {item!=null && <div className='dropdown'>
    <Autocomplete 
    onChange={handleChange1}
      id="item-select-demo"
      sx={{ width: 300 }}
      options={itemArray}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" key={option.id} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img className={`${option.rarity}`}
            loading="lazy"
            width="50"
            src={`${option.code}`}
            srcSet={`${option.code}`}
            alt=""
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        
        <TextField
          {...params}
          label="Escolha o Item"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  </div>
}
{itemRecipe!=null && item!=null &&
<>
  <div className="grid-container">
  <div className="grid-item epico"><img
            loading="lazy"
            width="50"
            src={`${itemImg}`}
            srcSet={`${itemImg}`}
            alt=""
          /></div>
  </div>
  <div className="grid-container">
  <div className="grid-item epico">2</div>
  <div className="grid-item epico">3</div>  
  <div className="grid-item epico">4</div>
  <div className="grid-item epico "><img
            loading="lazy"
            width="50"
            src={`${imgArray.banner[0]}`}
            srcSet={`${imgArray}`}
            alt=""
          /></div>
  </div>
  <div className="grid-container">
  <div className="grid-item raro">6</div>  
  <div className="grid-item raro">7</div>
  <div className="grid-item raro">8</div>
  </div>
  <div className="grid-container">
  <div className="grid-item incomum">9</div>
  <div className="grid-item incomum">9</div> 
  <div className="grid-item incomum">9</div>   
</div>
</>
}
  </div>
  );
}

