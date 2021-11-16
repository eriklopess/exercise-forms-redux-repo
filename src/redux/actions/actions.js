const saveInfo = (state) => ({
  type: 'SUBMIT',
  payload: {
    ...state,
  } });

export const saveProfessionalInfo = (state) => ({
  type: 'SUBMIT_PROFESSIONAL',
  payload: {
    ...state,
  } });

export default saveInfo;
