<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use Illuminate\Http\Request;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $bank = Bank::create([
            "bank_type" => $request->bank_type,
            "bank_name" => $request->bank_name,
            "bank_account" => $request->bank_account,
        ]);

        return response()->json([
            "success" => true,
            "message" => "Bank created successfully",
            "data" => $bank
        ], 200);
    }
}
