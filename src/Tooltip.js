import React from 'react';
import { Tooltip } from 'react-tooltip';
import './App.css';

const TooltipComponent = () => {
  return (
    <div className="tooltip-grid">
      <div className="tooltip-item" data-tooltip-id="tooltip1">Rounded</div>
      <div className="tooltip-item" data-tooltip-id="tooltip2">Shadow</div>
      <div className="tooltip-item" data-tooltip-id="tooltip3">Circular</div>
      <div className="tooltip-item" data-tooltip-id="tooltip4">Large</div>
      <div className="tooltip-item" data-tooltip-id="tooltip5">Small</div>
      <div className="tooltip-item" data-tooltip-id="tooltip6">Gradient</div>
      <div className="tooltip-item" data-tooltip-id="tooltip7">Border</div>
      <div className="tooltip-item" data-tooltip-id="tooltip8">Transparent</div>
      <div className="tooltip-item" data-tooltip-id="tooltip9">Icon</div>
      <div className="tooltip-item" data-tooltip-id="tooltip10">Pulse Effect</div>
      <div className="tooltip-item" data-tooltip-id="tooltip11">Clickable</div>
      <div className="tooltip-item" data-tooltip-id="tooltip12" data-tooltip-html="<h2>Skills</h2><ul><li>React</li><li>Python</li></ul>">Render HTML</div>

      <Tooltip id="tooltip1" content="This is a rounded tooltip!" place="top" className="tooltip-rounded" />
      <Tooltip id="tooltip2" content="This tooltip has a shadow!" place="bottom" className="tooltip-shadow" />
      <Tooltip id="tooltip3" content="This tooltip is circular!" place="top" className="tooltip-circle" />
      <Tooltip id="tooltip4" content="This tooltip is large!" place="left" className="tooltip-large" />
      <Tooltip id="tooltip5" content="This tooltip is small!" place="top" className="tooltip-small" />
      <Tooltip id="tooltip6" content="This tooltip has a gradient background!" place="bottom" className="tooltip-gradient" />
      <Tooltip id="tooltip7" content="This tooltip has a border!" place="right" className="tooltip-border" />
      <Tooltip id="tooltip8" content="This tooltip is transparent!" place="left" className="tooltip-transparent" />
      <Tooltip id="tooltip9" content="This tooltip has an icon!" place="top" className="tooltip-icon" />
      <Tooltip id="tooltip10" content="This tooltip is animated with a pulse effect!" place="bottom" className="tooltip-pulse" />
      <Tooltip id="tooltip11" place="bottom" clickable><button>You can click me!</button></Tooltip>
      <Tooltip id="tooltip12" place="bottom" />
    </div>
  );
};

export default TooltipComponent;