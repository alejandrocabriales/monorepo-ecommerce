import * as React from "react"

interface Props {
    width?: number;
    heigth?: number;
    fill?: string
}

const BookMarkBookMarkSvg: React.FC<Props> = ({ fill = '#FCFCFC', heigth, width, ...props }) => {
    return (
        <svg
            width={width}
            height={heigth}
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M9 12.518l6 4.167V2.923H3v13.762l6-4.167z" stroke={fill} />
        </svg>
    )
}

export default BookMarkBookMarkSvg