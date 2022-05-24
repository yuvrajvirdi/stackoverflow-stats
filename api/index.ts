import { fetchStats } from '../src/fetchers/fetchStats'
import { fetchSvg, fetchErrorSvg } from '../src/fetchers/fetchSvg'
import { fetchTheme } from '../src/fetchers/fetchTheme'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async (req: VercelRequest, res: VercelResponse) => {
    const { userId, theme } = req.query;
    
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'public, max-age=1800')

    try {
        if (!userId){
            return res.send(fetchErrorSvg('enter a user id'))
        }

        const user = userId as string
        const userTheme = theme ? fetchTheme((theme as string).toLowerCase()) : fetchTheme('dark')

        if (userTheme.value === 'unknown'){
            return res.send(fetchErrorSvg('enter a theme'))
        }

        const stats = await fetchStats(user)

        if (stats.status === '200'){
            return res.send(fetchSvg({stats, theme: userTheme}))
        } else {
            return res.send(fetchErrorSvg(stats.message))
        }
    } catch {
        return res.send(fetchErrorSvg('error in api routing'))
    }
}