// VideoModal.js

import React from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';

Modal.setAppElement('#root'); // Set the root element for accessibility

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    background: 'none',
                },
            }}
        >
            <ReactPlayer url={videoUrl} controls playing={isOpen} />
        </Modal>
    );
};

export default VideoModal;
