import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Comp from "./comp.js";
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
  const [ pos, setPos ] = useState(0)
  const [ pos0, setPos0 ] = useState(0)
  const [ pos1, setPos1 ] = useState(0)
  const [ pos2, setPos2 ] = useState(0)
  const [ pos0_epico, setPos0_epico] = useState(0);
  const [ pos1_epico, setPos1_epico] = useState(0);
  const [ pos2_epico, setPos2_epico] = useState(0);
  const [ pos0_raro, setPos0_raro] = useState(0);
  const [ pos1_raro, setPos1_raro] = useState(0);
  const [ pos2_raro, setPos2_raro] = useState(0);
  const [ pos0_incomum, setPos0_incomum] = useState(0);
  const [ pos1_incomum, setPos1_incomum] = useState(0);
  const [ pos2_incomum, setPos2_incomum] = useState(0);
  const [ assets1, setAssets1] = useState(0);
  const [ assets2, setAssets2] = useState(0);
  const [ assets3, setAssets3] = useState(0);
  const [ assets4, setAssets4] = useState(0);
  const [ assets5, setAssets5] = useState(0);
  const [ assets6, setAssets6] = useState(0);


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

<table>
<tr>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='epico'><img src={pos0} alt='' width='50px'/></div><TextField id="pos0_epico" label="Owned" variant="standard" onChange={e => setPos0_epico(e.target.value)}/></td>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='epico'><img src={pos1} alt='' width='50px'/></div><TextField id="pos1_epico" label="Owned" variant="standard" onChange={e => setPos1_epico(e.target.value)}/></td>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='epico'><img src={pos2} alt='' width='50px'/></div><TextField id="pos2_epico" label="Owned" variant="standard" onChange={e => setPos2_epico(e.target.value)}/></td>
  
</tr>

<tr>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='raro'><img src={pos0} alt='' width='50px'/></div><TextField id="pos0_raro" label="Owned" variant="standard" onChange={e => setPos0_raro(e.target.value)} /></td>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='raro'><img src={pos1} alt='' width='50px'/></div><TextField id="pos1_raro" label="Owned" variant="standard" onChange={e => setPos1_raro(e.target.value)}/></td>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='raro'><img src={pos2} alt='' width='50px'/></div><TextField id="pos2_raro" label="Owned" variant="standard" onChange={e => setPos2_raro(e.target.value)}/></td>
  
</tr>
<tr>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='incomum'><img src={pos0} alt='' width='50px'/></div><TextField id="outlined-basic" label="Owned" variant="standard" onChange={e => setPos0_incomum(e.target.value)} /></td>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='incomum'><img src={pos1} alt='' width='50px'/></div><TextField id="outlined-basic" label="Owned" variant="standard" onChange={e => setPos1_incomum(e.target.value)} /></td>
<td className='table' style={{display:'inline-grid', justifyItems:'center'}}><div className='incomum'><img src={pos2} alt='' width='50px'/></div><TextField id="outlined-basic" label="Owned" variant="standard" onChange={e => setPos2_incomum(e.target.value)} /></td>
  
</tr>
<tr>
   <td className='table' style={{display:'inline-grid', justifyItems:'center'}}><img src='data:image/webp;base64,UklGRkAKAABXRUJQVlA4WAoAAAAQAAAAUAAATwAAQUxQSNMEAAABGYVt26C4HWNE/+NUri++OQKBpP25d4iI1BxHsq0qcy4egoakIZB/BHoHZ80uYgImwNa2bYYk2zt63y+i0Jjmsm3btm17rSNt2z6ybdu2bWNcVnZVIuJbXhkxExETQPyNKxe86d3vfNnJlc1H/qM9b7z9OZ/54rWbj2QrBy6e+f7WH992tGx6BLaWGgDa5f3v+mm++oOnbT+3KdFY0bbiiWWH66//2o9fd9LBW3AToQhnOxmeot3pzm989GlXHTcPkKEC+kWB6RxlVvd5xtve8NIbZggySOAnCvtpVgrA+cPue+FxSiKMhK/Vmzoyonyzx8UUaBDhR3XYmBoE3YpQhA3oGzEyyR3CVg1D/ejNXH8WgaVuEC1J57srCL2VlWChd6pQkzcRDmAw6IUKYphquDkoQgaEEAAoPIpJFxFOEwwQgQYVAYBHnkwhxuoSJAAQEBAiyKxZ1ShkdwRVBAQUeIf1KREl97JVCQANQBGgWiwSke4llgGEgkABZbaJaHOolqeAIgYwIPV1RTTtL7LwZQUEqAygXMlKhljdW37qPcpWhNAGSmlrzRTR/uODhdPSoIAGGjC34RHt5PVri7QoL0JAlJmDE0SqWnzj6yNX+JJCKChqpR1NINrRN1+1GuUrCAtlevvWiFWTH/6cKJ8KEQLu4iMRbf63H1uEFVKKK45FtH7td6YRUkFSefYBGs/4F32EJYHsqJMcovXrfsJAYjQ75ViHaL373DTCWiA/7LwC0ar+/XsISuMlO/xmh3j98J0MI/DZUU9HxD7/3CyCGji3x0sQsfp//ZxBjHoedD+i7n51ESEFqpXb0ohI/nLEEKTCHTCnESn5jzpCGlX1+zURL2EbdYS0TitOKy4i0P9fQhiPmnpMJ/GQuqGNkKK2KOzMzDCi6vDfPgQLayeYWTRpLIT1/80QmKwtLHeKWKAzjS5CUql+ZmlVZaOPxnC1BgEJuzgnk7bGQcj0MEVIgqwtLHC0MohE1Y66CEml1OaWOeqlDlES0MY4CMjawiIHvTE1CqrqxhGCUmrzS7bXmRTWRwE/aazOghC1uUUZ9NICZAyktjaMUTIfrzo7W02GK15BjcGY/H9tLetxjamuqmajsVPARFGpNzYWCCkVna7qOC0UEPoIOLfNuhSlKyAVSBVF5lQBHRezEkx22LOHkDTGO+88hQS0s95sO89AdveWBgHV+ZWJt1M1SyAfd5szO8xIkJmkgbBmyqcUNdVqzQoBaDEqrBGW97uXIDCtT12R5ZmjoREhAE0zY0VK6jwTwUWdV++y8STNnFoDAnRZLjXDMtx715XHJ4CqAlBXpMloOM7VkCQ0V7XWPLXff0bKK9O7fCUZp95TSEKdsl7nUxh8MkHcmucrg8EgyXKKUJ0bc7bGJ+O+/30pS6QkAN5lo0GvO8oK0sgk6cuqOp/on1+bsCSpWGFZALwbD7vt7kruxNCN2jJb5+OMP/iXOkpWmCAA1E2G3WZnCFsz6Dfd9HQFzL7/3VnxZYhokTtFeM3TQXMwQYW+20i0ZlZ/qjJXoBSqqiJON2w1mr1knCXN/675x+/drFMtgSAiVjcZdFqtTj8Zr/3TaJqe2AxqkU2S0SjJ6jWn0HIYl0LhvStyRypZChVxU6nY3BJPSAIsgfLkAABWUDggRgUAAHAaAJ0BKlEAUAA+bSyRRaQioZb7ttBABsSxAGaCFaej5nlTyL/JhmNvh5jf2H/YD3gOhm6kD0APLO9jH90vRvzVD+jdqvfj5S/dcoIr5pUi6+VL/3PMN9N+wP/Lf6x1p/QZ/YdUr+6mbBTGRCwvXCqrvKskNH3aY9Lh0VvY1j6eaLaejzLvifnaGTdjmznLVfPv/Pu/xy2KblD4Buq/ZfkWpLD3wiWdv6vPymnwE0zM7/y4JT5cn0OryrTt0mdOTaP6ej7T+avgeKkyuoBMnwtaG6fGrZpG8aaC0oAA/v1uSoP/RLsy4HVt+eI2Hi8V8TMAiwtQGOrmUxu1EsjDP6DL+6cfxOy4tSKbgjfC9eh/DcaPPfvLSiB5y7He+ku1AEItfzsBuCrX0sDwTu8o+YMeeYGOjqMpBj2NjK1tKJe/2jHfYLnuMPe2S7v/LLRpj6kSt7+/F67PoZz4jidos6+h/Rr4l8pc8SatXCfIhUNkG5wdP5SwuiBDzFiXf/WA4pnoh/6osZoB1/+c3o/qrElgFnOBzpAhXQsSaAo9hdMpCsyo3Po84pI+SQ74xKrJBsD/JeXH52uuAKluTLDbze115mvSrKpA9+wVdbcWy1sAX/hdDbLu21DG+O9UI+a2eomFgPKmGRjAK3KsquVMLMOWDhxr9V3Y6rUImCgpNuB1ANUPNVA9/fK9wBZBxb8mZJCzjO1t9fcKsDJUWJ4K+f2hg8GOlaTb6DplsK+EdA99a87bTj9jrITBR14y9ZASSMZH1Uz0xmJl9AVdHRyW/ro4ngEgtodnPcML+la0nn5fl3J/sO8VWlEX4KJDhuHOJwN9HpbAMYU4TEuCBlByh4gfq4ZMpM2+4N6tD38yJFzX5cvVAw6VC86rj4Zzuwl+WwmK86jjjlihh56khInynOTaS+/Ei8taEb0YVJkJaeBnCtxMoFLIn3a/ZW+JjrDMExmrP+VZkYBmocmViW/WucSqtCavDQWnWRPoPveUnFhHyEQzCSSDUAV6LotqxMqSFgsQdcVvLWeACaiPpMqFv2aHPfMQp7wGWh4z5EOFIMSKnlPhOWu0bzW6HBaLvq17Ze+IoaLND0wXsCKJTCKq5gjN8GxGKU9Z9nNqlGvHvYxJkiC1U2qNaHTBXKAg6D4uFXtNXqeD1mN+CLbYOAmYkvSF9K3phizF4D/0HyRNujBuOgXWmm7cAsvHg6NcnmbdS5UFOAZjidd+SoZtm7xkZWem3bNfAE4o8Kf2+HbOibe9fs6bdzbUa/lM27Ubx1ccvgstWN/EwjTk3S8LFWosi1jsjJqMi4k/TEFMHd17J+Ac2TbLyO1R7PXwi7oLHP9wpog9amWByb8kNHAfQQnbRPfcFejv1qZpCSeP3/B8UmEeUP/0Qt6hMu/ADq0E4b3PX3aWDiTb2RX9/8ivviH8X/kD/+RX3xD+J6i+XTynN723Z/KS23tJseeXZ67ypprKOB5iSfmIdevd/8g+kyWumRlZHXeOrWRGvIcycfglMPmK/Oklw0x/370v3pzxm4hkIFnAYsioBqfmZ3WwsOxwJ0GhNLjvGtU0tLYPp/nyuMIqR5/8MMrF/g7P/R+q/85tJZq4gnyu2ReKLci7w9/g/rs6fahDHGRoNvhU3NjpY1P0gXPIS2h/84v8rJJwRx38IYIJJcHyVWq+RBcIFGhl6ZHncqKLEu0CnC/OOtdz50BMEkECLWosvPZ3Qa+udog1kz/qJwoinvQ7ikEbNR2aAMDDzDWq25ig7xy6O+GvObxLe2BVYNjFBQISgT5wQe9l/9/VgEGgAA==' alt='' width='50px'/><TextField id="outlined-basic" label="Dark Steel" variant="standard" onChange={e => setAssets1(e.target.value)} /></td>
   <td className='table' style={{display:'inline-grid', justifyItems:'center'}}><img src='data:image/webp;base64,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' alt='' width='50px'/><TextField id="outlined-basic" label="Copper" variant="standard" onChange={e => setAssets2(e.target.value)} /></td>
   <td className='table' style={{display:'inline-grid', justifyItems:'center'}}><img src='https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Consume_01/Item_Production_Meterial01_TwinclePowder.png' alt='' width='50px'/><TextField id="outlined-basic" label="Glittering Powder" variant="standard" onChange={e => setAssets3(e.target.value)} /></td>
</tr>
<tr>
   <td className='table' style={{display:'inline-grid', justifyItems:'center'}}><img src='https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Silver_Coin.png' alt='' width='50px'/><TextField id="outlined-basic" label="[PRICE] Silver Coin " variant="standard" onChange={e => setAssets4(e.target.value)} /></td>
   <td className='table' style={{display:'inline-grid', justifyItems:'center'}}><img src='https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Consume_01/Item_Production_Meterial01_TwinclePowder.png' alt='' width='50px'/><TextField id="outlined-basic" label="[PRICE] Glittering Powder" variant="standard" onChange={e => setAssets5(e.target.value)} /></td>
   <td className='table' style={{display:'inline-grid', justifyItems:'center'}}><img src='https://cdn0.iconfinder.com/data/icons/game-1-3/50/30-512.png' alt='' width='50px'/><TextField id="outlined-basic" label="Gold" variant="standard" onChange={e => setAssets6(e.target.value)} /></td>
</tr>
</table>

<Comp arrays={{ pos, pos0, pos1, pos2, itemImg, itemRecipe, pos0_epico, pos1_epico, pos2_epico, pos0_raro, pos1_raro, pos2_raro, pos0_incomum, pos1_incomum, pos2_incomum, assets1, assets2, assets3, assets4, assets5, assets6, }} />
  
</>
}
  </div>
  );
}

