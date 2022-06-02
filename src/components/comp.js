import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
export default function ScrollDialog({arrays}) {
    const { pos, pos0, pos1, pos2, itemImg, itemRecipe } = arrays
    console.log(pos, pos0, pos1, pos2)
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
        <br></br>
      <Button onClick={handleClickOpen('body')}>Ok</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'}>
            <div style={{ display:'table-caption', justifyContent:'center'}}>
        <div style={{ display:'flex', justifyContent:'center'}}  className="grid-container">
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
</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Back</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
