// import { TextField, FormControl, Label } from '../../components/TextField'
// import Button from '../../components/Button'
// import { useTranslation } from 'react-i18next'

// const ChangePassword = () => {
//     const { t } = useTranslation();
//     return (
//         <>
//             <div className="auth__form">
//                 <form autoComplete="off">
//                     <div className="auth__form__container">
//                         <FormControl>
//                             <TextField type="password" placeholder=""/>
//                             <Label labelName={t('changePassword.old_password')}/>
//                         </FormControl>
//                         <FormControl>
//                             <TextField type="password" placeholder=""/>
//                             <Label labelName={t('changePassword.new_password')}/>
//                         </FormControl>
//                         <FormControl>
//                             <TextField type="password" placeholder=""/>
//                             <Label labelName={t('changePassword.confirm_password')}/>
//                         </FormControl>
//                         <div className="auth__container__button">
//                             <Button type="submit" variant="primary">{t('changePassword.button')}</Button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default ChangePassword