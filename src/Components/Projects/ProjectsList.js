import React from 'react'
import { Grid } from '../layouts/Grid'
import Project from './ProjectItem/Project'

export default function ProjectsList({ AllProjects }) {
    return (
        <>
            <Grid template="1fr 1fr" placeItems="center" gap="20px" margin="0 0 20px">
                {
                    AllProjects.map((project, index) => <Project key={index} {...project} />)
                }
            </Grid>
        </>
    )
}
