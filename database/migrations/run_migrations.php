<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Messages migration
        require base_path('resources/js/Projects/Messenger/Migrations/messenger_conversations.php');
        require base_path('resources/js/Projects/Messenger/Migrations/messenger_messages.php');
        require base_path('resources/js/Projects/Messenger/Migrations/messenger_reactions.php');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        
    }
};
