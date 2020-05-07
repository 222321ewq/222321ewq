import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import HeaderModal from './HeaderModal';
import SimpleCard from '../ProcessMovementCard';
import { useStyles } from './style';

export default function ClientModal({ modalOpened, handleModalOpen, lawsuits }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  //const { id } = lawsuits;

  React.useEffect(() => {
    console.log('ModalOpened: ');
    console.log('olha isso');
  });

  const handleClose = () => {
    handleModalOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalOpened}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpened}>
          <div className={classes.modalContent}>
            <HeaderModal
              // clientName={'Luiza Fernandes Magalhães'}
              lawsuits={lawsuits}
              // value={'dinheiro'}
              // subject={'Horas extras não pagas'}
              handleModalOpen={handleModalOpen}
              lawsuits={lawsuits}
            />
            <div className={classes.processCardContainer}>
              {lawsuits.movimentacoes.map(movementation => {
                return <SimpleCard movementation={movementation} />;
              })}
              {/* <SimpleCard />
              <SimpleCard />
              <SimpleCard />
              <SimpleCard />
              <SimpleCard />
              <SimpleCard /> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
