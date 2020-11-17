import React, { useContext } from 'react'
import ModalDark from '../modal-dark'
import ActivitiesGrid from '../activities-grid'
import DestinationsGrid from '../destinations-grid'

import { ModalContext } from '../../context/modal-context'

const Modals = () => {
  const { state, dispatch } = useContext(ModalContext)
  const { modalActivities, modalDestinations } = state
  return (
    <>
      <ModalDark
        modalTitle=""
        closeHandler={() =>
          dispatch({ type: 'toggleModalActivities', payload: false })
        }
        open={modalActivities}
        style={{}}
        className="activity-destination"
      >
        <ActivitiesGrid />
      </ModalDark>
      <ModalDark
        modalTitle=""
        closeHandler={() =>
          dispatch({ type: 'toggleModalDestinations', payload: false })
        }
        open={modalDestinations}
        style={{}}
        className="activity-destination"
      >
        <DestinationsGrid />
      </ModalDark>
    </>
  )
}

export default Modals
