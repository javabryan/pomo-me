// Page Elements
export const $elements = {
    pomoTimer: document.getElementsByClassName('pomo-timer')[0],
    timer: document.getElementById('timer'),
    start: document.getElementById('start'),
    reset: document.getElementById('reset'),
    shortBreak: document.getElementById('shortBreak'),
    longBreak: document.getElementById('longBreak'),
    increaseTime: document.getElementById('increaseTime'),
    decreaseTime: document.getElementById('decreaseTime'),
    progressBar: document.getElementById('progressBar'),
    tickingVolume: document.getElementById('ticking-volume'),
    timesUpVolume: document.getElementById('times-up-volume'),
    buttonVolume: document.getElementById('button-volume'),
    masterVolume: document.getElementById('master-volume'),
    muteTickingButton: document.getElementById('mute-ticking'),
    muteTimesUp: document.getElementById('mute-times-up'),
    muteButtonPresses: document.getElementById('mute-button-presses'),
    muteAll: document.getElementById('mute-all'),
    iconMuted: document.getElementsByClassName('icon-muted')[0],
    iconVolume: document.getElementsByClassName('icon-volume')[0],
    audioTicking: document.getElementById('audioTicking'),
    audioButtonPress: document.getElementById('audioButtonPress'),
    audioTimesUp: document.getElementById('audioTimesUp'),
    stateView: document.getElementById('stateView')
};

export let state = {
    countdown: () => {},
    isActive: false,
    dateStarted: 0,
    delta: 0,
    strokeDashArrayOffset: 0,
    startHidden: false,
    pomoState: 'init',
    muteTicking: false,
    muteButtonPresses: false,
    muteNotifications: false,
    muteTimesUp: false,
    muteAll: false,
    originalTime: 10,
    startTime: 10,
    remainingTime: 10,
    currentDelta: 0
};
