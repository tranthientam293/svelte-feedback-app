import { writable } from 'svelte/store'
import { data } from '@/assets/data'

export const FeedbackStore = writable(data)
