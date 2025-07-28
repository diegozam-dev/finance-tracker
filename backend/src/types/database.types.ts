export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      categories: {
        Row: {
          color: string
          created_at: string
          icon_path: string
          id: number
          name: string
          type: Database["public"]["Enums"]["category_type"]
          updated_at: string
          user_id: string | null
        }
        Insert: {
          color?: string
          created_at?: string
          icon_path: string
          id?: number
          name: string
          type: Database["public"]["Enums"]["category_type"]
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          color?: string
          created_at?: string
          icon_path?: string
          id?: number
          name?: string
          type?: Database["public"]["Enums"]["category_type"]
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "category_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      goals: {
        Row: {
          created_at: string
          goal_amount: number
          id: number
          image_path: string
          name: string
          saved_amount: number
          state: Database["public"]["Enums"]["goal_states"]
          target_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          goal_amount: number
          id?: number
          image_path?: string
          name: string
          saved_amount?: number
          state: Database["public"]["Enums"]["goal_states"]
          target_date: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          goal_amount?: number
          id?: number
          image_path?: string
          name?: string
          saved_amount?: number
          state?: Database["public"]["Enums"]["goal_states"]
          target_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      login_history: {
        Row: {
          created_at: string
          failure_reason: string | null
          id: number
          ip_address: string
          status: Database["public"]["Enums"]["login_status"]
          user_agent: string
          user_id: string
        }
        Insert: {
          created_at?: string
          failure_reason?: string | null
          id?: number
          ip_address: string
          status: Database["public"]["Enums"]["login_status"]
          user_agent: string
          user_id: string
        }
        Update: {
          created_at?: string
          failure_reason?: string | null
          id?: number
          ip_address?: string
          status?: Database["public"]["Enums"]["login_status"]
          user_agent?: string
          user_id?: string
        }
        Relationships: []
      }
      notification_templates: {
        Row: {
          action_url: string | null
          body: string
          created_at: string
          id: number
          metadata: Json | null
          title: string
          type: string
          updated_at: string
        }
        Insert: {
          action_url?: string | null
          body: string
          created_at?: string
          id?: number
          metadata?: Json | null
          title: string
          type: string
          updated_at?: string
        }
        Update: {
          action_url?: string | null
          body?: string
          created_at?: string
          id?: number
          metadata?: Json | null
          title?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          app_preferences: Json
          avatar_path: string
          created_at: string
          firstname: string
          id: string
          lastname: string
          updated_at: string
          username: string
          wallet: number
        }
        Insert: {
          app_preferences?: Json
          avatar_path?: string
          created_at?: string
          firstname: string
          id: string
          lastname: string
          updated_at?: string
          username: string
          wallet?: number
        }
        Update: {
          app_preferences?: Json
          avatar_path?: string
          created_at?: string
          firstname?: string
          id?: string
          lastname?: string
          updated_at?: string
          username?: string
          wallet?: number
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string | null
          id: number
          name: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          category_id: number | null
          created_at: string | null
          description: string | null
          goal_id: number | null
          id: number
          is_deleted: boolean | null
          tags: number[] | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
        }
        Insert: {
          amount?: number
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          goal_id?: number | null
          id?: number
          is_deleted?: boolean | null
          tags?: number[] | null
          transaction_date?: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          goal_id?: number | null
          id?: number
          is_deleted?: boolean | null
          tags?: number[] | null
          transaction_date?: string | null
          type?: Database["public"]["Enums"]["transaction_type"]
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notifications: {
        Row: {
          created_at: string
          id: number
          read_at: string | null
          template_id: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          read_at?: string | null
          template_id: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          read_at?: string | null
          template_id?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_notifications_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "notification_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_notifications_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_category: {
        Args: {
          p_user_id: string
          p_name: string
          p_icon_path: string
          p_color: string
          p_type: Database["public"]["Enums"]["category_type"]
        }
        Returns: {
          color: string
          created_at: string
          icon_path: string
          id: number
          name: string
          type: Database["public"]["Enums"]["category_type"]
          updated_at: string
          user_id: string | null
        }
      }
      create_goal: {
        Args: {
          p_user_id: string
          p_name: string
          p_goal_amount: number
          p_image_path?: string
          p_target_date?: string
          p_state?: Database["public"]["Enums"]["goal_states"]
        }
        Returns: {
          created_at: string
          goal_amount: number
          id: number
          image_path: string
          name: string
          saved_amount: number
          state: Database["public"]["Enums"]["goal_states"]
          target_date: string
          updated_at: string
          user_id: string
        }
      }
      create_tag: {
        Args: { p_user_id: string; p_name: string }
        Returns: {
          created_at: string | null
          id: number
          name: string
          updated_at: string | null
          user_id: string | null
        }
      }
      create_transaction: {
        Args: {
          p_user_id: string
          p_type: Database["public"]["Enums"]["transaction_type"]
          p_amount: number
          p_description: string
          p_transaction_date: string
          p_category_id?: number
          p_goal_id?: number
          p_tag_names?: string[]
        }
        Returns: {
          amount: number
          category_id: number | null
          created_at: string | null
          description: string | null
          goal_id: number | null
          id: number
          is_deleted: boolean | null
          tags: number[] | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
        }
      }
      delete_category: {
        Args: { p_category_id: number; p_user_id: string }
        Returns: {
          color: string
          created_at: string
          icon_path: string
          id: number
          name: string
          type: Database["public"]["Enums"]["category_type"]
          updated_at: string
          user_id: string | null
        }
      }
      delete_goal: {
        Args: { p_goal_id: number; p_user_id: string }
        Returns: {
          created_at: string
          goal_amount: number
          id: number
          image_path: string
          name: string
          saved_amount: number
          state: Database["public"]["Enums"]["goal_states"]
          target_date: string
          updated_at: string
          user_id: string
        }
      }
      delete_tag: {
        Args: { p_tag_id: number; p_user_id: string }
        Returns: {
          created_at: string | null
          id: number
          name: string
          updated_at: string | null
          user_id: string | null
        }
      }
      delete_transaction: {
        Args: { p_transaction_id: number; p_user_id: string }
        Returns: {
          amount: number
          category_id: number | null
          created_at: string | null
          description: string | null
          goal_id: number | null
          id: number
          is_deleted: boolean | null
          tags: number[] | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
        }
      }
      delete_user_notification: {
        Args: { p_user_id: string; p_notification_id: number }
        Returns: {
          created_at: string
          id: number
          read_at: string | null
          template_id: number
          updated_at: string
          user_id: string
        }
      }
      get_or_create_tag_ids: {
        Args: { p_user_id: string; p_tag_names: string[] }
        Returns: number[]
      }
      get_profile: {
        Args: { p_user_id: string }
        Returns: {
          app_preferences: Json
          avatar_path: string
          created_at: string
          firstname: string
          id: string
          lastname: string
          updated_at: string
          username: string
          wallet: number
        }
      }
      get_transactions: {
        Args: { p_user_id: string; p_limit?: number; p_offset?: number }
        Returns: {
          amount: number
          category_id: number | null
          created_at: string | null
          description: string | null
          goal_id: number | null
          id: number
          is_deleted: boolean | null
          tags: number[] | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
        }[]
      }
      get_user_categories: {
        Args: { p_user_id: string }
        Returns: {
          color: string
          created_at: string
          icon_path: string
          id: number
          name: string
          type: Database["public"]["Enums"]["category_type"]
          updated_at: string
          user_id: string | null
        }[]
      }
      get_user_goals: {
        Args: {
          p_user_id: string
          p_state?: Database["public"]["Enums"]["goal_states"]
        }
        Returns: {
          created_at: string
          goal_amount: number
          id: number
          image_path: string
          name: string
          saved_amount: number
          state: Database["public"]["Enums"]["goal_states"]
          target_date: string
          updated_at: string
          user_id: string
        }[]
      }
      get_user_notifications: {
        Args: { p_user_id: string }
        Returns: Database["public"]["CompositeTypes"]["rich_notification"][]
      }
      get_user_tags: {
        Args: { p_user_id: string }
        Returns: {
          created_at: string | null
          id: number
          name: string
          updated_at: string | null
          user_id: string | null
        }[]
      }
      mark_notifications_as_read: {
        Args: { p_user_id: string; p_notification_ids: number[] }
        Returns: {
          created_at: string
          id: number
          read_at: string | null
          template_id: number
          updated_at: string
          user_id: string
        }[]
      }
      update_category: {
        Args: {
          p_category_id: number
          p_user_id: string
          p_name: string
          p_icon_path: string
          p_color: string
        }
        Returns: {
          color: string
          created_at: string
          icon_path: string
          id: number
          name: string
          type: Database["public"]["Enums"]["category_type"]
          updated_at: string
          user_id: string | null
        }
      }
      update_goal: {
        Args: {
          p_goal_id: number
          p_user_id: string
          p_name: string
          p_goal_amount: number
          p_image_path: string
          p_target_date: string
        }
        Returns: {
          created_at: string
          goal_amount: number
          id: number
          image_path: string
          name: string
          saved_amount: number
          state: Database["public"]["Enums"]["goal_states"]
          target_date: string
          updated_at: string
          user_id: string
        }
      }
      update_profile: {
        Args: {
          p_user_id: string
          p_firstname: string
          p_lastname: string
          p_username: string
          p_avatar_path: string
        }
        Returns: {
          app_preferences: Json
          avatar_path: string
          created_at: string
          firstname: string
          id: string
          lastname: string
          updated_at: string
          username: string
          wallet: number
        }
      }
      update_tag: {
        Args: { p_tag_id: number; p_user_id: string; p_name: string }
        Returns: {
          created_at: string | null
          id: number
          name: string
          updated_at: string | null
          user_id: string | null
        }
      }
      update_transaction: {
        Args: {
          p_transaction_id: number
          p_user_id: string
          p_type: Database["public"]["Enums"]["transaction_type"]
          p_amount: number
          p_description: string
          p_transaction_date: string
          p_category_id: number
          p_goal_id: number
          p_tag_names: string[]
        }
        Returns: {
          amount: number
          category_id: number | null
          created_at: string | null
          description: string | null
          goal_id: number | null
          id: number
          is_deleted: boolean | null
          tags: number[] | null
          transaction_date: string | null
          type: Database["public"]["Enums"]["transaction_type"]
          updated_at: string | null
          user_id: string
        }
      }
    }
    Enums: {
      category_type: "expense" | "income"
      goal_states: "active" | "completed" | "archived"
      login_status: "success" | "failure"
      transaction_type: "expense" | "income" | "goal"
    }
    CompositeTypes: {
      rich_notification: {
        notification_id: number | null
        user_id: string | null
        read_at: string | null
        created_at: string | null
        template_type: string | null
        title: string | null
        body: string | null
        action_url: string | null
        metadata: Json | null
      }
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      category_type: ["expense", "income"],
      goal_states: ["active", "completed", "archived"],
      login_status: ["success", "failure"],
      transaction_type: ["expense", "income", "goal"],
    },
  },
} as const
