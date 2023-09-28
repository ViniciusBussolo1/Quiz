export type Json = string | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      Questions: {
        Row: {
          corret_answers: string | null
          created_at: string
          id: string
          incorrect_answers: string[] | null
          question: string | null
        }
        Insert: {
          corret_answers?: string | null
          created_at?: string
          id?: string
          incorrect_answers?: string[] | null
          question?: string | null
        }
        Update: {
          corret_answers?: string | null
          created_at?: string
          id?: string
          incorrect_answers?: string[] | null
          question?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
