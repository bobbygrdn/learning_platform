import React from 'react'
import { useStore } from 'zustand';
import useTableStore from '../../store/useTableStore';
import { toast } from 'react-toastify';
import useCredentialStore from '../../store/useCredentialsStore';
import useAuthStore from '../../store/useAuthStore';

export default function ViewContent() {

    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore);
    const { userId } = useStore(useCredentialStore);
    const { token } = useStore(useAuthStore);

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    }

    const handleEnroll = () => {

        const handleChoice = () => {
            toast.dismiss();
            fetch(`/api/v1/users/${userId}/enroll`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: currentEntity.id
            })
                .then((response) => response.json())
                .then((data) => {
                    toast.success(`You are now enrolled in ${currentEntity.title}!`);
                    setModalOpen(!modalOpen);
                })
                .catch(error => {
                    toast.error(`You are already enrolled in ${currentEntity.title}!`);
                })
        }

        toast.info(
            <div>
                <h3>Are you sure you want to enroll in {currentEntity.title}?</h3>
                <div className='buttons'>
                    <button className='yes' onClick={handleChoice}>Submit</button>
                    <button className='no' onClick={() => toast.dismiss()}>Cancel</button>
                </div>
            </div>,
            {
                autoClose: false,
                closeOnClick: false,
                className: 'courseEnroll'
            }
        )

    }

    return (
        <div className='viewContent'>
            <button className='close' onClick={handleModalOpen}>Close</button>
            <div className='modalContent'>
                <h2 className='viewContentTitle'>{currentEntity.title}</h2>
                <div className='contentView'>
                    <p style={{ marginBottom: '.5em' }}>Difficulty: {currentEntity.difficulty}</p>
                    <p style={{ marginBottom: '.5em' }}>Time To Complete: {currentEntity.timeToComplete}</p>
                    <p style={{ marginBottom: '.5em' }}>Description: {currentEntity.description}</p>
                    <div>
                        <ul style={{ display: 'flex', flexDirection: 'column', fontSize: '.8em' }}>
                            {currentEntity.lessons.map(current => <li key={current.id}>{current.title}</li>)}
                        </ul>
                    </div>
                    <button className='yes' style={{ alignSelf: 'center', marginTop: '1em' }} onClick={handleEnroll}>Enroll</button>
                </div>
            </div>
        </div>
    )
}
