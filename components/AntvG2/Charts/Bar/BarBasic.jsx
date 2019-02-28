import React, { Component } from 'react';
import { Chart, Axis, Geom, Tooltip, Coord } from 'bizcharts';

export default class BarBasic extends Component {
  static displayName = 'BarBasic';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
    this.dataSet = this.props.dataSet;
  }

  render() {
    return (
      <Chart {...this.dataSet.chartParams}>
        <Coord transpose />
        {
          this.dataSet.axis.map((axis, aidx) => {
            return <Axis key={aidx} {...axis} />;
          })
        }
        <Tooltip crosshairs={{ type: 'y' }} />
        <Geom type="interval" {...this.dataSet.geom[0]} />
      </Chart>
    );
  }
}
