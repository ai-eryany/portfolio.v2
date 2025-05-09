import { clx } from '@/shared/utils';
import styles from './InfiniteWords.animation.module.scss';

export default function InfiniteWordsAnimation() {
  return (
    <div className={clx(styles.wrapper)}>
      <div className={clx(styles.tagList)}>
        <div className={clx(styles.loopSlider1)}>
          <div className={clx(styles.inner)}>
            <div className={clx(styles.tag)}>
              <span>#</span> Drilling
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Exploration
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Oilfield Services
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Production
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Reservoir
            </div>
            {/* <!-- duplicated content --> */}
            <div className={clx(styles.tag)}>
              <span>#</span> Drilling
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Exploration
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Oilfield Services
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Production
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Reservoir
            </div>
          </div>
        </div>
        <div className={clx(styles.loopSlider2)}>
          <div className={clx(styles.inner)}>
            <div className={clx(styles.tag)}>
              <span>#</span> Oil Rig
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Wellhead
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Offshore
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Seismic
            </div>
            {/* <!-- duplicated content --> */}
            <div className={clx(styles.tag)}>
              <span>#</span> Oil Rig
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Wellhead
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Offshore
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Seismic
            </div>
          </div>
        </div>
        <div className={clx(styles.loopSlider3)}>
          <div className={clx(styles.inner)}>
            <div className={clx(styles.tag)}>
              <span>#</span> Exploration Drilling
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Mud Logging
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Completions
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Production Testing
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Subsea
            </div>
            {/* <!-- duplicated content --> */}
            <div className={clx(styles.tag)}>
              <span>#</span> Exploration Drilling
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Mud Logging
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Completions
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Production Testing
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Subsea
            </div>
          </div>
        </div>
        <div className={clx(styles.loopSlider4)}>
          <div className={clx(styles.inner)}>
            <div className={clx(styles.tag)}>
              <span>#</span> Reservoir Management
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Oil Sands
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Deepwater
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Offshore Platforms
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
            {/* <!-- duplicated content --> */}
            <div className={clx(styles.tag)}>
              <span>#</span> Reservoir Management
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Oil Sands
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Deepwater
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Offshore Platforms
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Hydraulic Fracturing
            </div>
          </div>
        </div>
        <div className={clx(styles.loopSlider5)}>
          <div className={clx(styles.inner)}>
            <div className={clx(styles.tag)}>
              <span>#</span> Oil Extraction
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Reservoir Simulation
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Production Enhancement
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Gas Flaring
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Drilling Fluids
            </div>
            {/* <!-- duplicated content --> */}
            <div className={clx(styles.tag)}>
              <span>#</span> Oil Extraction
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Reservoir Simulation
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Production Enhancement
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Gas Flaring
            </div>
            <div className={clx(styles.tag)}>
              <span>#</span> Drilling Fluids
            </div>
          </div>
        </div>
        <div className={clx(styles.fade)}></div>
      </div>
    </div>
  );
}
