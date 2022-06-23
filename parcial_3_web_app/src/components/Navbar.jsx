import { Box, makeStyles, Typography } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: theme.shadows[4],
        display: 'flex',
        padding: theme.spacing(2),
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    linkContainer: {
        marginLeft: theme.spacing(5),
    },

    link: {
        marginLeft: theme.spacing(4),
        textDecoration: 'none',
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightLight,
        fontSize: '1rem'
    },

    title: {
        fontWeight: theme.typography.fontWeightRegular
    },
    home: {
        cursor: 'pointer'
    }
}))

export const Navbar = () => {

    const classess = useStyles()
  return (
      <Box className={classess.root}>
          <Typography variant="h6" className={classess.title} color='primary'>
              Administración
          </Typography>

          <Box className={classess.linkContainer}>
              <Link to='usuarios' className={classess.link}>Usuarios</Link>
              <Link to='cursos' className={classess.link}>Certificaciones</Link>
              <Link to='habilidades' className={classess.link}>Portafolio</Link>
              <Link to='redes' className={classess.link}>Redes</Link>
              <Link to='grado' className={classess.link}>Grados académicos</Link>
          </Box>
          <Link to='/' className={classess.home}>
              <HomeIcon className={classess.home} color='primary' />
          </Link>

      </Box>
  )
}


