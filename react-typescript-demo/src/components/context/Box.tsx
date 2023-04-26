import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

interface Props { }

function Box(props: Props) {
    const { } = props
    const theme = useContext(ThemeContext);
    return (<div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Theme Context</div>

    )
}

export default Box
