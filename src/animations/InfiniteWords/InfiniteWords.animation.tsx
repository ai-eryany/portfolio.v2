import Helper from '@/libs/Helper.lib';
import styles from './InfiniteWords.animation.module.scss';

export default function InfiniteWords() {
  return (
    <div className={Helper.cn(styles.wrapper)}>
      <div className={Helper.cn(styles.tagList)}>
        <div className={Helper.cn(styles.loopSlider1)}>
          <div className={Helper.cn(styles.inner)}>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Drilling
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Exploration
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oilfield Services
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Production
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Reservoir
            </div>
            {/* <!-- duplicated content --> */}
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Drilling
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Exploration
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oilfield Services
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Production
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Reservoir
            </div>
          </div>
        </div>
        <div className={Helper.cn(styles.loopSlider2)}>
          <div className={Helper.cn(styles.inner)}>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oil Rig
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Wellhead
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Offshore
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Seismic
            </div>
            {/* <!-- duplicated content --> */}
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oil Rig
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Wellhead
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Offshore
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Seismic
            </div>
          </div>
        </div>
        <div className={Helper.cn(styles.loopSlider3)}>
          <div className={Helper.cn(styles.inner)}>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Exploration Drilling
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Mud Logging
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Completions
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Production Testing
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Subsea
            </div>
            {/* <!-- duplicated content --> */}
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Exploration Drilling
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Mud Logging
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Completions
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Production Testing
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Subsea
            </div>
          </div>
        </div>
        <div className={Helper.cn(styles.loopSlider4)}>
          <div className={Helper.cn(styles.inner)}>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Reservoir Management
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oil Sands
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Deepwater
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Offshore Platforms
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
            {/* <!-- duplicated content --> */}
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Reservoir Management
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oil Sands
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Deepwater
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Offshore Platforms
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
          </div>
        </div>
        <div className={Helper.cn(styles.loopSlider5)}>
          <div className={Helper.cn(styles.inner)}>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oil Extraction
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Reservoir Simulation
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Production Enhancement
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Gas Flaring
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Drilling Fluids
            </div>
            {/* <!-- duplicated content --> */}
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Oil Extraction
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Reservoir Simulation
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Production Enhancement
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Gas Flaring
            </div>
            <div className={Helper.cn(styles.tag)}>
              <span>#</span> Drilling Fluids
            </div>
          </div>
        </div>
        <div className={Helper.cn(styles.fade)}></div>
      </div>
    </div>
  );
}
