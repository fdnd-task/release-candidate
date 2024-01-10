import { supabase } from '$lib/server/supabase';

export async function load({ params }) {
    const matchRequest = await supabase
        .from('matches')
        .select('*, team_a (*, country (*)), team_b (*, country (*)), tournament (*)')
        .eq('id', params.uid)

    const statisticsRequest = await supabase
        .from('statistics')
        .select('*')
        .eq('match', params.uid)

    return { match: matchRequest.data[0], statistics: statisticsRequest.data }
}

