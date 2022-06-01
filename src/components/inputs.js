import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './inputs.css'
import Typography from '@mui/material/Typography';
const prefiix = `https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/`;
const assets = [
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_Ring_003.png`, label: 'Lunisolar Ring', rarity: 'epico', type: 'acessorio', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_Dragon_Horn.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_015.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_LightFragment_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_SpiritStone_01.png', id:'0' },
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_Bracelet_003.png`, label: 'Pacification Bracelet', rarity: 'epico', type: 'acessorio', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_Dragon_Horn.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_015.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_LightFragment_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_SpiritStone_01.png', id:'1' },
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_Necklace_003.png`, label: 'Pacification Necklace', rarity: 'epico', type: 'acessorio', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_Dragon_Horn.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_015.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_LightFragment_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_SpiritStone_01.png', id:'2' },
{ code: `${prefiix}Item_Equip_Accessory_01/Pcc_Accessory_EarRing_006.png`, label: 'Fallen Sun Earrings', rarity: 'epico', type: 'acessorio', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_02/Item_Make_Dragon_Eye.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_015.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_LightFragment_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_SpiritStone_01.png', id:'3' },
];
const taoistitem = [
{ code: `${prefiix}Item_Equip_Pct_01/Icon_WPN_PCT_05.png`, label: 'Sacred Treasure Sword', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonScales.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'0' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_SubWeapon_06.png`, label: 'Exorcism Fly-Whisk', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_02/Item_Make_Dragon_Claw.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'1' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Top.png`, label: 'Pakua Robe', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'2' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Pants.png`, label: 'Ultimate Crane Outfit', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'3' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Gloves.png`, label: 'Trustbuilding Robe Gloves', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'4' },
{ code: `${prefiix}Item_Equip_Pct_01/PCT_Armor_05_Shose.png`, label: 'Pakua Boots', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'5' }
];
const arbalistitem = [
{ code: `${prefiix}Item_Equip_Pca_01/Icon_WPN_PCA_05.png`, label: 'New Moon Bow', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonScales.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'0' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_SubWeapon_06.png`, label: 'Changhae Quiver', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_02/Item_Make_Dragon_Claw.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'1' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Top.png`, label: 'Deep Secret Martial Uniform Top', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'2' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Pants.png`, label: 'Deep Secret Martial Uniform Pants', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'3' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Gloves.png`, label: 'Deep Secret Martial Uniform Gloves', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'4' },
{ code: `${prefiix}Item_Equip_Pca_01/PCA_Armor_05_Shose.png`, label: 'Deep Secret Martial Uniform Shoes', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'5' },
];
const lanceritem = [
{ code: `${prefiix}Item_Equip_Pcz_01/Icon_Wpn_PCZ_05.png`, label: 'Brave Dragon Halberd', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonScales.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'0' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_SubWeapon_06.png`, label: 'Purple Moon Hand Polearm', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_02/Item_Make_Dragon_Claw.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'1' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Top.png`, label: 'Battleslayer Combat Top ', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'2' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Pants.png`, label: 'Battleslayer Combat Pants', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'3' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Gloves.png`, label: 'Battleslayer Combat Gloves', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'4' },
{ code: `${prefiix}Item_Equip_Pcz_01/PCZ_Armor_05_Shose.png`, label: 'Battleslayer Combat Boots', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'5' },

];
const classes = [
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/arbalist-grade5.webp', name:'Arbalist', id:'0' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/warrior-grade5.webp', name:'Warrior', id:'1' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/taoist-grade5.webp', name:'Taoist', id:'2' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/sorcerer-grade5.webp', name:'Mage', id:'3' },
  { banner: 'https://file.mir4global.com/xdraco-thumb/card-nft/lancer-grade5.webp', name:'Lancer', id:'4' },
]
const mageitem = [
  { code: `${prefiix}Item_Equip_Pcm_01/Icon_WPN_PCM_05.png`, label: 'Green Jade Twin Dragons Staff', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonScales.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'0' },
  { code: `${prefiix}Item_Equip_Pcm_01/PCM_SubWeapon_06.png`, label: 'Sapphire Fan', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_02/Item_Make_Dragon_Claw.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'1' },
  { code: `${prefiix}Item_Equip_Pcm_01/PCM_Armor_05_Top.png`, label: 'Soul Subjugator Uniform', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'2' },
  { code: `${prefiix}Item_Equip_Pcm_01/PCM_Armor_05_Pants.png`, label: 'Soul Subjugator Uniform', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'3' },
  { code: `${prefiix}Item_Equip_Pcm_01/PCM_Armor_05_Gloves.png`, label: 'Soul Subjugator Gloves', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'4' },
  { code: `${prefiix}Item_Equip_Pcm_01/PCM_Armor_05_Shose.png`, label: 'Soul Subjugator Boots', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'5' },
];
const warrioritem = [
  { code: `${prefiix}Item_Equip_Pcw_01/Icon_WPN_PCW_06.png`, label: 'Spacetime Traveler Mace', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonScales.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'0' },
  { code: `${prefiix}Item_Equip_Pcw_01/PCW_SubWeapon_06.png`, label: 'Bloodsoaked Knife', rarity: 'epico', type: 'arma', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonScales.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_DarkHeartStone_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_MoonShadowStone_01.png', id:'1' },
  { code: `${prefiix}Item_Equip_Pcw_01/PCW_Armor_05_Top.png`, label: 'Roaring Thunder Armor', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'2' },
  { code: `${prefiix}Item_Equip_Pcw_01/PCW_Armor_05_Pants.png`, label: 'Ultimate Heavy Armor', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'3' },
  { code: `${prefiix}Item_Equip_Pcw_01/PCW_Armor_05_Gloves.png`, label: 'Ultimate Heavy Gloves', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'4' },
  { code: `${prefiix}Item_Equip_Pcw_01/PCW_Armor_05_Shose.png`, label: 'Ultimate Heavy Boots', rarity: 'epico', type: 'roupa', pos:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Make_DragonLeather.png',pos0:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Mineing_004.png',pos1:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_ChivalryBead_01.png',pos2:'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Production_AntiMagicBead_01.png', id:'5' },
];


export default function ItemSelect() {
  const [ imgClass, setImgClass ] = useState(null)
  const [ item, setItem ] = useState(null)
  const [ itemArray, setItemArray ] = useState([]) 
  const [ itemRecipe, setItemRecipe] = useState(null)
  const [ itemImg, setItemImg ] = useState(null)
  const [ imgArray, setImgArray ] = useState(null)
  const [ pos, setPos ] = useState()
  const [ pos0, setPos0 ] = useState()
  const [ pos1, setPos1 ] = useState()
  const [ pos2, setPos2 ] = useState()

  function handleChange1(e, value, reason) {
    console.log(reason)
    if(reason === "selectOption"){
      setItemRecipe(value.label)
      setItemImg(value.code)
      setPos(value.pos)
      setPos0(value.pos0)
      setPos1(value.pos1)
      setPos2(value.pos2)
    }else if(reason === "clear"){
      setItemRecipe(null)
      setItemImg(null)
    }
  }

  function handleChange(e, value, reason) {
    console.log(reason)
    if(reason === "selectOption"){
      setItem(value.name)
      setImgClass(value.banner)
      setItemRecipe(null)
      setItemImg(null)
      value.name === "Arbalist" && setItemArray([...arbalistitem, ...assets])
      value.name === "Lancer" && setItemArray([...lanceritem, ...assets])
      value.name === "Taoist" && setItemArray([...taoistitem, ...assets])
      value.name === "Mage" && setItemArray([...mageitem, ...assets])
      value.name === "Warrior" && setItemArray([...warrioritem, ...assets])
    }
    else if(reason === "clear"){
      setItem(null)
      setImgClass(null)
    }
  }
  return (
    <div className='main'>
             
    
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
<Typography className='top' variant="h2" component="h2">
<img
            loading="lazy"
            width="150"
            src={`${imgClass}`}
            srcSet={`${imgClass}`}
            alt=""
          /> 
</Typography>
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
            width="60"
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
            width='80px'
            src={`${itemImg}`}
            srcSet={`${itemImg}`}
            alt=""
          />{itemRecipe}
            </div>
  </div>
  <div className="grid-container">
  <div className="grid-item epico">
  <img
            loading="lazy"
            width="80px"
            src={`${pos0}`}
            srcSet={`${pos0}`}
            alt=""
          />300/500
  </div>
  <div className="grid-item epico">
  <img
            loading="lazy"
            width="80px"
            src={`${pos1}`}
            srcSet={`${pos1}`}
            alt=""
          />300/500
    </div>  
  <div className="grid-item epico">
  <img
            loading="lazy"
            width="80px"
            src={`${pos2}`}
            srcSet={`${pos2}`}
            alt=""
          />300/500
  </div>
  <div className="grid-item epico ">
  <img
            loading="lazy"
            width="80px"
            src={`${pos}`}
            srcSet={`${pos}`}
            alt=""
          />
  </div>
  </div>
  <div className="grid-container">
  <div className="grid-item raro">
  <img
            loading="lazy"
            width="80px"
            src={`${pos0}`}
            srcSet={`${pos0}`}
            alt=""
          />300/500
  </div>
  <div className="grid-item raro">
  <img
            loading="lazy"
            width="80px"
            src={`${pos1}`}
            srcSet={`${pos1}`}
            alt=""
          />300/500
    </div>  
  <div className="grid-item raro">
  <img
            loading="lazy"
            width="80px"
            src={`${pos2}`}
            srcSet={`${pos2}`}
            alt=""
          />300/500
  </div>

  </div>
  <div className="grid-container">
  <div className="grid-item incomum">
  <img
            loading="lazy"
            width="80px"
            src={`${pos0}`}
            srcSet={`${pos0}`}
            alt=""
          />300/500
  </div>
  <div className="grid-item incomum">
  <img
            loading="lazy"
            width="80px"
            src={`${pos1}`}
            srcSet={`${pos1}`}
            alt=""
          />300/500
    </div>  
  <div className="grid-item incomum">
  <img
            loading="lazy"
            width="80px"
            src={`${pos2}`}
            srcSet={`${pos2}`}
            alt=""
          />300/500
  </div>
</div>
</>
}
  </div>
  );
}

