import React from 'react';

class InstallPWA extends React.Component {
  state = {
    readyToInstall: false,
  }

  installEvent = null;

  componentDidMount() {
    // ask for persistance
    // persist not available in safari
    if ('storage' in navigator && 'persist' in navigator.storage) {
      navigator.storage.persist();
    }
    window.addEventListener('beforeinstallprompt', (evt) => {
      evt.preventDefault()
      this.installEvent = evt;
      this.setState({
        readyToInstall: true,
      });

    });
  }

  install = async () => {
    // this is a promise
    const outcome = this.installEvent.prompt();

    // outcome is a stream
    if (outcome === 'dismissed') {

    } else {
      // analytics on outcome
    }
    return outcome;
  }

  render() {
    // wait for browser to give us this ability
    return (
      <>
      { this.state.readyToInstall ? <div> Install app</div> :
          navigator.standalone === false
            ? <p> Tap, Share, Add to homescreen to install </p> : null
      }
      </>
    );
  }
}

export default InstallPWA;
