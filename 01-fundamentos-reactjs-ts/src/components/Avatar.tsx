import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

// FAzendo essa extensão eu não preciso passar na interface o que já existe 
// por padrão 
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: boolean;
}

// Usa-se o pread operator nas props para pegar tudo que quiser
//  e evitar ficar adicionando mais tipagens
export function Avatar({hasBorder = true, ...props}: AvatarProps){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    )
}

