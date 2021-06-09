import React from 'react';
import { useNetworkState } from 'react-use';

import { motion } from 'framer-motion';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOffIcon from '@material-ui/icons/CloudOff';

const NetworkAlert = () => {
  const networkState = useNetworkState();
  const isOnline = networkState.online;
  return (
    <div className="network-alert-container">
      <motion.div
        className="network-alert-icon network-alert-offline"
        title="Offline"
        animate={{
          opacity: !isOnline ? 1 : 0,
          zIndex: !isOnline ? 1 : 0,
        }}
      >
        <CloudOffIcon />
      </motion.div>
      <motion.div
        className="network-alert-icon"
        title="Online"
        animate={{
          opacity: isOnline ? 1 : 0,
          zIndex: isOnline ? 1 : 0,
        }}
      >
        <CloudIcon />
      </motion.div>
    </div>
  );
};
export default NetworkAlert;
