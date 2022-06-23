import { useEffect } from "react";
import { RedesSection } from "../components/landingpage/RedesSection";
import { Box, Container, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CertificacionesSection } from "../components/landingpage/CertificacionesSection";
import { UserInfoSection } from "../components/landingpage/UserInfoSection";
import { loadUserInfo } from "../redux/thunks/loadUserInfo";
import { ProyectosSection } from "../components/landingpage/ProyectosSection";
import { GradosSection } from "../components/landingpage/GradosSection";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(1),
  },
}));

export const LandingLayout = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUserInfo(user));
  }, []);

  return (
    <Box>

      <UserInfoSection usuario={usuario?.user} />

     
      {usuario?.user?.certificacion?.length > 0 && (
        <CertificacionesSection usuario={usuario?.user} />
      )}

      {usuario?.user?.experiencia?.length > 0 && (
        <ProyectosSection usuario={usuario?.user} />
      )}

      {usuario?.user?.grado_academico && (
        <GradosSection usuario={usuario?.user} />
      )}
      


      <RedesSection usuario={usuario?.user} />
    </Box>
  );
};
